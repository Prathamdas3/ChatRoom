'use client';
import React, { useState, useRef } from 'react';
import Chat from '@/components/Chat';
export default function Page() {
  const [room, setRoom] = useState(null);
  const roomInputRef = useRef(null);

  const handleChat = (e: any) => {
    e.preventDefault();
    document.getElementById('my_modal_1').showModal();
  };

  return (
    <div>
      {room ? (
        <div className="container mx-auto ">
          <Chat code={room} />
        </div>
      ) : (
        <div className="container mx-auto flex flex-col items-center justify-center min-h-screen py-2 gap-4">
          <button className="btn" onClick={handleChat}>
            Join Chat
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box flex flex-col gap-2">
              <h3 className="font-bold text-lg">Join chatroom</h3>
              <label className="mx-2 text-sm" htmlFor="room_id">
                Enter room code
              </label>
              <input
                type="text"
                placeholder="Type code "
                id="room_id"
                className="input input-bordered w-full max-w-xs"
                ref={roomInputRef}
              />

              <div className="modal-action">
                <form method="dialog " className="flex gap-2">
                  <button type="submit" className="btn btn-error">
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-success"
                    onClick={() => setRoom(roomInputRef.current.value)}
                  >
                    Join
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      )}
    </div>
  );
}
