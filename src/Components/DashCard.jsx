import React, { useContext, useEffect, useState } from "react";
import Card from "../Card";
import UserContext from "../UserContext";
import axios from "axios";

function DashCard() {
  let context = useContext(UserContext);
  let [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    loadData1();
    loadData2();
    loadData3();
    loadData4();
    // const [data, setData] = useState([]);
    // (async () => {
    //   const data1 = await axios.get(
    //     "https://631f097322cefb1edc40d739.mockapi.io/books"
    //   );
    //   const data2 = await axios.get(
    //     "https://jsonplaceholder.typicode.com/todos/2"
    //   );
    //   setData({ data1, data2 });
    // })();
  }, []);

  let loadData1 = async () => {
    try {
      setLoading(true);
      let books = await axios.get(
        "https://631f097322cefb1edc40d739.mockapi.io/books"
      );
      context.setbookcount(books.data.length);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  let loadData2 = async () => {
    try {
      setLoading(true);
      let members = await axios.get(
        "https://631f097322cefb1edc40d739.mockapi.io/members"
      );
      context.setMembercount(members.data.length);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  let loadData3 = async () => {
    try {
      setLoading(true);
      let borrow = await axios.get(
        "https://631f097322cefb1edc40d739.mockapi.io/borrow"
      );
      context.setBorrowcount(borrow.data.length);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  let loadData4 = async () => {
    try {
      setLoading(true);
      let returnb = await axios.get(
        "https://631f097322cefb1edc40d739.mockapi.io/return"
      );
      context.setReturnbcount(returnb.data.length);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  let cardData = [
    {
      id: 1,
      count: context.bookcount,
      title: "Books",
      icon: "book",
      color: "#5CB8E4",
    },
    {
      id: 2,
      count: context.membercount,
      title: "Members",
      icon: "user-friends",
      color: "#C3FF99",
    },
    {
      id: 3,
      count: context.borrowcount,
      title: "Borrowed",
      icon: "left-long",
      color: "#F7A76C",
    },
    {
      id: 4,
      count: context.returnbcount,
      title: "Returned",
      icon: "right-long",
      color: "#FFE898",
    },
  ];
  return (
    <div className="mx-3 my-5">
      <h2 style={{ color: "#25316D" }}>Dashboard</h2>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <div className="container-fluid mx-5 my-5">
          <div className="row">
            {cardData.map((data) => {
              return <Card data={data} key={data.id}></Card>;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default DashCard;