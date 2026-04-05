import React, { useState } from "react";
import { Link, Outlet } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ListedBooks = () => {
  const [sort, setSort] = useState("");

  return (
    <>
      <div className="container mx-auto">
        <div className="text-center bg-base-300 p-10 rounded-2xl my-10">
          <h2 className="font-bold text-2xl">Books</h2>
        </div>
        <div className="flex justify-center items-center">
          <div className="dropdown dropdown-center">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort by : {`(${sort})`}
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a onClick={() => setSort("Pages")}>Pages</a>
              </li>
              <li>
                <a onClick={() => setSort("Rating")}>Rating</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Tabs>
            <TabList>
              <Tab>
                {" "}
                <Link to={""}> Read-List </Link>{" "}
              </Tab>
              <Tab>
                {" "}
                <Link to={"wishList"}> Wish-List </Link>{" "}
              </Tab>
            </TabList>
          </Tabs>
        </div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default ListedBooks;
