import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center">
      <div className="pt-8 max-w-screen-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-center items-center">
            <img
              src={"/chessboard.jpg"}
              alt="Chessboard"
              className="max-w-96"
            />
          </div>
          <div className="flex flex-col justify-center items-center md:items-start">
            <h1 className="text-4xl font-bold text-white text-center md:text-left">
              Play chess online on the best chess platform
            </h1>
            <div className="mt-4">
              <Button
                onClick={() => {
                  navigate("/game");
                }}
              >
                Play Online
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
