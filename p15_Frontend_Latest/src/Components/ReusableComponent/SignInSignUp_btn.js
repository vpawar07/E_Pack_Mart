import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
// import{isLoggedIn} from

export default function SignInSignUpBtn() {
  // const { isLoggedIn } = useSelector((state) => state.logged);
  const{isLoggedIn}=useSelector((state)=>state.logged);
  const navigate = useNavigate();

  return (
    <>
    {!isLoggedIn && (
    <Card
      className="text-center p-3 mx-auto"
      style={{ width: "300px", marginTop: "200px" }}
    >
      <Button
        variant="success"
        className="mb-2"
        onClick={() => navigate("/login")}
      >
        Sign In
      </Button>
      <div>
        <span>
          New customer?{" "}
          <Link to="/register" className="text-primary">
            Start here
          </Link>
        </span>
      </div>
    </Card>)
  }
  <h1>hi</h1>
  </>
  );
}
