import React from "react";
import styled from "styled-components";

import M from "../assets/copia-100.png";
export default function Card() {
  return (
    <div class="card">
      <div class="cta logo-thumbnail">
        <img src={M} className="" alt="" />
        <h1> Learn the basics of finance for investing! all this BY PLAYING</h1>
        <p class="description"></p>
        <p class="price">
          Join the waiting ist to be among the first 100 to try out PLEARN for
          the first time
        </p>
        <div className="flex w-full dark:bg-gray-800">
          <input
            type="text"
            name="price"
            id="price"
            placeholder="Email"
            className="flex flex-1  text-center border sm:text-sm rounded-l-md    dark:text-gray-100 dark:bg-gray-800"
          />

          <button>subscribe</button>
        </div>
      </div>
      <div class="img"></div>
    </div>
  );
}
