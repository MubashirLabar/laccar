import axios from "axios";

export const getCustomerList = async () => {
    try {
        const response = await axios.post(
            `https://testproject560.online/git/api/customers.php?action=list`,
            {},
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MjY4NTU4MzUsImV4cCI6MTc1ODM5MTgzNSwidXNlcl9pZCI6IjcifQ.Sm4Oxkp6RIVjPE99zbrjmMdmyq7LQ6Mnk4nSLdhgWZ4`,
                }
            }
        );
        return response?.data;
    } catch (error) {
        console.log("customer list error....", error);
        return error;
    }
};
