// app/services/user.js
import {UserModel} from '../models/index';

/**
 * 获取全部用户信息
 * @returns {Promise}
 */
const getUsers = async () => {
  let res = await UserModel.find().exec()
  console.log('getUsers', res)
  return res;
};
/**
 * 获取用户信息
 * @returns {Promise}
 */
const findByPhone = async (phone) => {
  let res = await UserModel.findOne({'phone': phone}).exec();
  console.log('findUserByPhone', res)
  return res;
};
/**
 * 是否存在
 * @returns {Promise}
 */
const exits = async (name, phone) => {
  let res = await UserModel.find().$where(`this.name == "${name}" || this.phone == "${name}" || this.name == "${phone}" || this.phone == "${phone}" `).exec();
  console.log('exits', res)
  return res[0];
};
/**
 * 获取用户信息
 * @returns {Promise}
 */
const findById = async (id) => {
  let res = await UserModel.findOne({'_id': id}).exec();
  console.log('findUserByPhone', res)
  return res;
};
/**
 * 登录
 * @param options
 * @returns {Promise}
 */
const signin = async ({name, password}) => {
  let res = await UserModel.findOne({'password': password}).$where(`this.name == "${name}" || this.phone == "${name}" `).exec();
  console.log('signin', res)
  return res;
};
/**
 * 注册
 * @param options
 * @returns {Promise}
 */
const signup = async (options) => {
  let res = await UserModel.create(options);
  console.log('signup', res)
  return res;
};

export default {
  signup,
  signin,
  findByPhone,
  findById,
  getUsers,
  exits
}