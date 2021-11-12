import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function MusicForm() {
  const {
    formState: { errors },
  } = useForm();

  const [name, setName] = useState("");
  const [songs, setSongs] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSongs = (e) => {
    setSongs(e.target.value);
  };
  return (
    <div>
      <h1>Music Form</h1>
    </div>
  );
}
