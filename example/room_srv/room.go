package main

import (
	"errors"
	"github.com/google/uuid"
	"github.com/wolfplus2048/mcbeam-plus/session"
	"sync"
)

var (
	rooms sync.Map
)

type User struct {
	uid     string
	name    string
	session *session.Session
}
type Room struct {
	sync.RWMutex
	id    string
	name  string
	users map[string]*User
}

func New(name string) (*Room, error) {
	id := uuid.New().String()
	r := &Room{id: id, name: name}
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
	if _, ok := r.users[user.uid]; ok {
		return errors.New("user already exists")
	}
	r.users[user.uid] = user
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
		u.session.Push("chat", content)
	}
}
