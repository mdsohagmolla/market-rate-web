'use client'

import { authClient } from "@/lib/auth-client";

import { useRouter } from "next/navigation";





const ProfilePage = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user
    console.log('profile er data', user)

    const router = useRouter();

    const handleSignout = async () => {
        await authClient.signOut();
         router.push("/");
         router.refresh();  


    }



    // form er handle function

    const handleUpdateUser = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const newUser = Object.fromEntries(formData.entries()) as { name: string, email: string, image: string, }
        console.log('update  form er data', newUser)

        // update function call

        await authClient.updateUser({
            image: newUser.image,
            name: newUser.name
        })



    }







    return (
        <div>
            {
                user ? <div className="min-h-screen bg-[#F0F5F0] px-4 py-8">

                <div className="max-w-2xl mx-auto">

                    {/* Page Heading */}
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold text-[#26332B]">
                            আমার প্রোফাইল
                        </h1>

                        <p className="text-sm text-gray-500 mt-1">
                            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন
                        </p>
                    </div>

                    {/* User Information Card */}
                    <div className="bg-[#FAFCFA] border border-[#DDE6DE] rounded-2xl p-5 sm:p-6 mb-6">

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

                            {/* User Details */}
                            <div className="flex items-center gap-4">

                                <div className="avatar">
                                    <div className="w-16 h-16 sm:w-20 sm:h-16 rounded-2xl overflow-hidden bg-gray-100">
                                        <img
                                            src={user?.image || "/ronaldo.jpg"}
                                            alt={user?.name || "Profile image"}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="min-w-0">
                                    <h2 className="text-lg font-semibold text-[#26332B]">
                                        {user?.name}
                                    </h2>

                                    <p className="text-sm sm:text-base text-gray-500 break-all">
                                        {user?.email}
                                    </p>
                                </div>

                            </div>

                            {/* Sign Out Button */}
                            <button
                                type="button"
                                onClick={handleSignout}
                                className="btn btn-outline border-green-500 text-green-500 hover:bg-green-500 hover:text-white hover:border-red-500"
                            >
                                ↩ সাইন আউট
                            </button>

                        </div>

                    </div>

                    {/* Profile Update Card */}
                    <div className="bg-[#FAFCFA] border border-[#DDE6DE] rounded-2xl p-5 sm:p-6">

                        <h2 className="text-base font-semibold text-[#26332B] mb-6">
                            তথ্য
                        </h2>

                        <form onSubmit={handleUpdateUser}>

                            <fieldset className="flex flex-col gap-3 px-1 sm:px-4">

                                {/* Name */}
                                <label className="text-sm font-medium text-[#26332B]">
                                    নাম
                                </label>

                                <input
                                    name="name"
                                    type="text"
                                    defaultValue={user?.name || ""}
                                    className="input w-full bg-transparent border-[#DDE6DE] focus:outline-green-600"
                                    placeholder="আপনার নাম লিখুন"
                                    required
                                />

                                {/* Image URL (optional) */}
                                <label className="text-sm font-medium text-[#26332B] mt-2">
                                    প্রোফাইল ছবির URL
                                </label>

                                <input
                                    name="image"
                                    type="url"
                                    defaultValue={user?.image || ""}
                                    className="input w-full bg-transparent border-[#DDE6DE] focus:outline-green-600"
                                    placeholder="https://example.com/image.jpg"
                                />

                                {/* Update Button */}
                                <button
                                    type="submit"
                                    className="btn w-full bg-green-700 hover:bg-green-800 text-white border-0 mt-1 shadow-md"
                                >
                                    আপডেট
                                </button>

                            </fieldset>

                        </form>

                    </div>

                </div>

            </div>:<div></div>
            }

        </div>

    );
};

export default ProfilePage;