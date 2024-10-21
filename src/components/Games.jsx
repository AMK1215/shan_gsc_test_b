import React from "react";
import { Spinner } from "react-bootstrap";
import { IoGameController } from "react-icons/io5";
import launchGame from "../hooks/LaunchGame";


export default function Games({ item, type, loading }) {
  // console.log(item);

  return (
    <>
      {loading ? (
         <div className="text-center cursor-pointer col-2 px-1 mb-3">
        <Spinner />
        </div>
      ) : (
        <div className="cursor-pointer col-2 px-1 mb-4" 
        onClick={launchGame(item.game_type_id === 4 ? 8 : item.game_type_id, item.product_code, item.code)}
        >
          <div className="gameCardLg" >
            <div className="text-center mx-auto">
            <img src={item.image_url} className="img-fluid rounded-top-3" />
            </div>
            
            <div className="rounded-bottom-3 fw-semibold px-2 activeGameList text-white">
              <p className="pt-1 fw-semibold mb-0 gameName">
                {/* {type.toUpperCase()} | Game */}
                {item.name}
              </p>
              <div className="d-flex align-items-center gap-2 text-white">
                <IoGameController size={30} />
                <p className="fw-semibold">68</p>
              </div>
            </div>
            <div className="gameCardLgBtn rounded-5 d-flex align-items-center justify-content-center shadow-lg">
              <p className="fw-semibold">ဂိမ်းကစားရန်</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}