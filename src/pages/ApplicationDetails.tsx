import TabNav from "../components/TabNav"
import { icons } from "../assets/images";
import ApplicationDetailsTable from "../components/ApplicationDetailsTable";
const ApplicationDetails = () => {
    return (
        <div>
            {/* content */}
            <div className="">
                <div className="bg-[#DDE4FF] px-5 py-3">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-black uppercase text-sm font-semibold leading-[34px]">
                                Applicant details
                            </p>
                            <p className="text-2xl font-semibold leading-[34px]">
                                Omkar Shirke
                            </p>
                        </div>
                        <div>
                            <img
                                src={icons.fileIcon}
                                alt="home"
                                width={52}
                                height={52}
                                className="object-contain h-7 cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* end of content */}
            <div className="max-w-[1230px] mt-6 mx-auto px-4">

                <div className="">
                    <TabNav
                        items={[
                            {
                                label: (
                                    <div className="flex items-center pb-2">
                                        <div className="bg-[#DDE4FF] rounded-full h-4 w-4 text-[1D1D1F] text-[11px] font-medium flex items-center justify-center p-1 mr-1">
                                            1
                                        </div>
                                        <p>Applicant Details</p>
                                    </div>
                                ),
                                value: 0,
                            },
                            {
                                label: (
                                    <div className="flex items-center pb-2">
                                        <div className="bg-[#fff] border border-1 rounded-full border-black h-4 w-4 text-[1D1D1F] text-[11px] font-medium flex items-center justify-center p-1 mr-1">
                                            2
                                        </div>
                                        <p>Loan Details</p>
                                    </div>
                                ),
                                value: 1,
                            },
                            {
                                label: (
                                    <div className="flex items-center pb-2">
                                        <div className="bg-[#fff] border border-1 rounded-full h-4 w-4 text-[1D1D1F] text-[11px] font-medium flex items-center justify-center p-1 mr-1">
                                            3
                                        </div>
                                        <p>Financial Data</p>
                                    </div>
                                ),
                                value: 2,
                            },
                            {
                                label: (
                                    <div className="flex items-center pb-2">
                                        <div className="bg-[#fff] border border-1 rounded-full h-4 w-4 text-[1D1D1F] text-[11px] font-medium flex items-center justify-center p-1 mr-1">
                                            4
                                        </div>
                                        <p>Exposure and Rating</p>
                                    </div>
                                ),
                                value: 3,
                            },
                        ]}
                        value={0}
                        handleChange={() => { }}
                    />
                </div>
                {/* table */}
                <div className="mt-8">
                    <ApplicationDetailsTable />
                </div>
                {/* address strip bottom */}
                <div className="mt-7">
                    <h3 className="text-black text-xs font-semibold leading-[34px]">
                        Address Details
                    </h3>
                    <div className="bg-[#F3F3F380] px-4 pt-1 pb-3">
                        <h3 className="text-black text-xs font-semibold leading-[34px]">Residential Address</h3>
                        <p className="text-[#717071] text-xs font-semibold ">C-101, Bajaj Towers, Mahape, Navi Mumbai, Maharashtra 400705</p>

                    </div>
                    <div className="mt-6 bg-[#F3F3F380] px-4 pt-1 pb-3">
                        <h3 className="text-black text-xs font-semibold leading-[34px]">Permanent Address</h3>
                        <p className="text-[#717071] text-xs font-semibold ">C-101, Bajaj Towers, Mahape, Navi Mumbai, Maharashtra 400705</p>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ApplicationDetails
