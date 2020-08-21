package room

import (
	"errors"
	"github.com/google/uuid"
	proto_room "github.com/wolfplus2048/mcbeam-plus/example/protos/room"
	"github.com/wolfplus2048/mcbeam-plus/session"
	"sync"
)

var (
	rooms sync.Map
)

type User struct {
	Uid     string
	Name    string
	Session *session.Session
}
type Room struct {
	sync.RWMutex
	Id    string
	Name  string
	users map[string]*User
}

func New(name string) (*Room, error) {
	id := uuid.New().String()
	r := &Room{Id: id,
		Name:  name,
		users: make(map[string]*User),
	}
	rooms.Store(id, r)
	return r, nil
}
func GetRoom(id string) *Room {
	r, ok := rooms.Load(id)
	if ok {
		return r.(*Room)
	}
	return nil
}
func (r *Room) JoinRoom(user *User) error {
	r.Lock()
	defer r.Unlock()
	if _, ok := r.users[user.Uid]; ok {
		return errors.New("user already exists")
	}
	r.users[user.Uid] = user
	return nil
}
func (r *Room) LeaveRoom(uid string) error {
	r.Lock()
	defer r.Unlock()
	if _, ok := r.users[uid]; !ok {
		return errors.New("user not exists")
	}
	delete(r.users, uid)
	return nil
}
func (r *Room) Chat(uid string, content string) {
	r.RLock()
	defer r.RUnlock()
	for _, u := range r.users {
		u.Session.Push("chat", content)
	}
}
func (r *Room) GetUsers() []*proto_room.User {
	users := make([]*proto_room.User, 0)
	for _, u := range r.users {
		users = append(users, &proto_room.User{
			Uid:      u.Uid,
			Username: u.Name,
		})
	}
	return users
}
