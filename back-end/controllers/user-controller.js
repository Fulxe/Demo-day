import UserModel from "../models/userModel";

const createUser = async (props) => {
  return await UserModel.create(props);
};
const login = () => {};
const removeUser = () => {};
const getUser = (id) => {};
