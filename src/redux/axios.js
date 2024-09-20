import axios from "axios";

export const getCustomerList = async () => {
  try {
    const response = await axios.post(
      `https://testproject560.online/git/api/customers.php?action=list`,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MjY4NTYyMDIsImV4cCI6MTc1ODM5MjIwMiwidXNlcl9pZCI6IjcifQ.ZN4fvaFgpNzIkAyXJBoN2THxC7CLimgwJ3z2DNjd2J0`,
        },
      }
    );
    return response?.data;
  } catch (error) {
    console.log("customer list error....", error);
    return error;
  }
};
