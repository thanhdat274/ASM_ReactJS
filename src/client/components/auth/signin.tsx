import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const Signin: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <main className="mt-[10px] bg-white border-[1px] border-[#cccc] rounded-[10px] drop-shadow-md">
                <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 my-[10px]">
                    <div className="max-w-lg w-full space-y-8">
                        <div>
                            <h2 className="mt-6 text-center text-2xl font-extrabold text-[#e11b1e] uppercase">ĐĂNG NHẬP VÀO Tài khoản THÀNH VIÊN SMEMBER</h2>
                            <p className="mt-2 text-center text-sm text-gray-600" />
                        </div>
                        <form className="space-y-6" data-sb-form-api-token="API_TOKEN">
                            <div className="mt-4">
                                <label className="block" htmlFor="email">Địa chỉ email <span className="text-red-500">*</span></label>
                                <input type="text" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>
                            <div className="mt-4">
                                <label className="block">Mật khẩu <span className="text-red-500">*</span></label>
                                <input type="password" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="comments" className="text-gray-500 cursor-pointer">Remember me</label>
                                    </div>
                                </div>
                                <Link to="/forgetPass" className="text-sm text-[#d70018] hover:underline">Forgot Password?</Link>
                            </div>
                            <div>
                                <button className="w-full px-4 py-2 font-medium text-center text-white transition-colors duration-200 rounded-md bg-[#d70018] rounded-lg hover:bg-[#d70018] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 dark:focus:ring-offset-darker">
                                    Đăng nhập
                                </button>
                            </div>
                        </form>
                        <div className="flex items-center justify-center space-x-2 flex-nowrap">
                            <span className="w-20 h-px bg-gray-300" />
                            <span>OR</span>
                            <span className="w-20 h-px bg-gray-300" />
                        </div>
                        <div className="grid grid-cols-3 gap-3 text-xl">
                            <div className="border-2 rounded-md p-3 text-center cursor-pointer hover:bg-indigo-100 ">
                                <Link to="#">  <i className="fab fa-google" /></Link>
                            </div>
                            <div className="border-2 rounded-md p-3 text-center cursor-pointer hover:bg-indigo-100">
                                <i className="fab fa-linkedin" />
                            </div>
                            <div className="border-2 rounded-md p-3 text-center cursor-pointer hover:bg-indigo-100">
                                <i className="fab fa-github" />
                            </div>
                        </div>
                        <div className="text-gray-600 dark:text-gray-400">Bạn chưa có tài khoản? <Link to="/signup" className="text-blue-600 hover:underline">Đăng ký</Link></div>
                    </div>
                </div>
            </main>
        </div>

    );
};

export default Signin;