const Profile = () => {
  return (
    <div className="rouned divide-y divide-neutral-200 mx-[60px]">
            <div className="p-6">
                <h3 className="text-lg font-medium mb-4">Profile Information</h3>
                <div className="flex items-center gap-4 mb-6">
                    <img src="" alt="Profile" className="w-20 h-20 rounded-full"/>
                    <div>
                        <button className="px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                            Change Photo
                        </button>
                    </div>
                </div>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-neutral-600 mb-1">First Name</label>
                        <input type="text" value="John" className="w-full p-2 border border-neutral-200 rounded"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-neutral-600 mb-1">Last Name</label>
                        <input type="text" value="Doe" className="w-full p-2 border border-neutral-200 rounded"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-neutral-600 mb-1">Email</label>
                        <input type="email" value="john@example.com" className="w-full p-2 border border-neutral-200 rounded bg-neutral-50"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-neutral-600 mb-1">Phone Number</label>
                        <input type="tel" value="+91 9876543210" className="w-full p-2 border border-neutral-200 rounded"/>
                    </div>
                </form>
            </div>
            <div className="p-6">
                <h3 className="text-lg font-medium mb-4">Security</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-neutral-600 mb-1">Current Password</label>
                        <input type="password" className="w-full p-2 border border-neutral-200 rounded"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-neutral-600 mb-1">New Password</label>
                        <input type="password" className="w-full p-2 border border-neutral-200 rounded"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-neutral-600 mb-1">Confirm New Password</label>
                        <input type="password" className="w-full p-2 border border-neutral-200 rounded"/>
                    </div>
                    {/* <div className="flex items-center justify-between pt-4">
                        <div>
                            <h4 className="font-medium">Two-Factor Authentication</h4>
                            <p className="text-sm text-neutral-500">Add an extra layer of security to your account</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input className="checkbox"/>
                            <div className="w-11 h-6 bg-neutral-200 peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                        </label>
                    </div> */}
                </div>
            </div>

            {/* <div className="p-6">
                <h3 className="text-lg font-medium mb-4">Preferences</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="font-medium">Email Notifications</h4>
                            <p className="text-sm text-neutral-500">Receive email updates about your trades</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input className="checkbox" checked/>
                            <div className="w-11 h-6 bg-neutral-200 peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                        </label>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="font-medium">Price Alerts</h4>
                            <p className="text-sm text-neutral-500">Get notifications for price movements</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" checked className="sr-only peer"/>
                            <div className="w-11 h-6 bg-neutral-200 peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                        </label>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="font-medium">Market Updates</h4>
                            <p className="text-sm text-neutral-500">Receive daily market analysis</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer"/>
                            <div className="w-11 h-6 bg-neutral-200 peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                        </label>
                    </div>
                </div>
            </div> */}
            <div className="p-6 bg-neutral-50">
                <div className="flex justify-end gap-4">
                    <button className="px-4 py-2 border border-neutral-200 rounded hover:bg-neutral-100 transition-colors">
                        Cancel
                    </button>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
  )
}

export default Profile