import "../styles/main.css";
import hello from "../assets/icons/hello.svg";
import Chart from "../components/admin/Chart";
import { Box, HStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { data } = useSelector((store) => store.product);
  const { data: adminData } = useSelector((store) => store.admin);

  let Income = 0;

  adminData.carts.map((el) => el.cartData.map((x) => (Income += +x.price)));

  console.log(Income);

  const allProducts =
    Number(data.mens.length) +
    Number(data.womens.length) +
    Number(data.electronics.length);
  return (
    <HStack bg={"#f3f4f6"} w="full">
      <Box alignSelf={"center"} className="main__container">
        <HStack className="main__title">
          <img src={hello} alt="hello" />
          <div style={{ textAlign: "start" }} className="main__greeting">
            <h1>Hello Chief</h1>
            <p>Welcome to your admin dashboard</p>
          </div>
        </HStack>

        <div className="main__cards">
          <div className="card">
            <i
              className="fa fa-user-o fa-2x text-lightblue"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Users</p>
              <span className="font-bold text-title">
                {adminData.users.length}
              </span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Products</p>
              <span className="font-bold text-title">{allProducts}</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-video-camera fa-2x text-yellow"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Purchases</p>
              <span className="font-bold text-title">
                {adminData.carts.length}
              </span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-thumbs-up fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p"> Number of employees </p>
              <span className="font-bold text-title">5</span>
            </div>
          </div>
        </div>
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Reports</h1>
                <p>Bangalore, India</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <Chart />
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Stats Reports</h1>
                <p>Bangalore, India</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Income</h1>
                <p>$ {Income / 2}</p>
              </div>

              <div className="card2">
                <h1>Sales</h1>
                <p>${Income}</p>
              </div>

              <div className="card3">
                <h1>Users</h1>
                <p> {adminData.users.length}</p>
              </div>

              <div className="card4">
                <h1>Orders</h1>
                <p> {adminData.carts.length}</p>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </HStack>
  );
};

export default Dashboard;
