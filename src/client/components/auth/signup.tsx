import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div>
            <main className="mt-[10px] bg-white border-[1px] border-[#cccc] rounded-[10px] drop-shadow-md">
                <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 my-[10px]">
                    <div className="max-w-lg w-full space-y-8">
                        <div>
                            <h2 className="mt-6 text-center text-2xl font-extrabold text-[#e11b1e] uppercase">ĐĂNG Ký Tài khoản THÀNH VIÊN SMEMBER</h2>
                            <p className="mt-2 text-center text-sm text-gray-600" />
                        </div>
                        <form>
                            <div className="mt-4">
                                <div>
                                    <label className="block" htmlFor="Name">Họ và tên <span className="text-red-500">*</span></label>
                                    <input type="text" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                </div>
                                <div className="mt-4">
                                    <label className="block" htmlFor="email">Địa chỉ email <span className="text-red-500">*</span></label>
                                    <input type="text" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                </div>
                                <div className="mt-4">
                                    <label className="block">Mật khẩu <span className="text-red-500">*</span></label>
                                    <input type="password" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                </div>
                                <div className="flex mt-[20px]">
                                    <button className="w-full px-6 py-2 mt-4 text-white bg-[#d70018] rounded-lg hover:bg-[#d70018]">Đăng ký</button>
                                </div>
                                <div className="mt-6 text-grey-dark">Bạn đã có tài khoản? <Link className="text-blue-600 hover:underline" to="/signin">Đăng nhập</Link></div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Signup