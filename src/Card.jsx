import React from 'react'
import "./App.css"
import Gallary from "../src/gallary.png"
import VideoImg from "../src/youtube.png"
import Star from "../src/star.png"
import Pin from "../src/pin.png"
import Check from "../src/check.png"
import ApplyImg from "../src/list.png"
import DownloadImg from "../src/ddd.png"

export const Card = (props) => {
    const { cName, location, cdRating, userRating, fees } = props
    return (
        <>
            <div className='card'>
                <div className='c_top'>
                    {/* <img src="https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGxlZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="college img" className='c_img' /> */}
                    <div className='c_top_item'>
                        <div style={{ display: "flex", color: "white" }}>
                            <img src={Gallary} alt="" />
                            <span style={{ marginLeft: "7px" }}>42</span>
                        </div>
                        <div style={{ display: "flex", color: "white" }}>
                            <img src={VideoImg} alt="" />
                            <span style={{ marginLeft: "7px" }}>2</span>
                        </div>

                        <div style={{ display: "flex", width: "50%", justifyContent: "space-around" }}>
                            <img src={Star} alt="" height={"20px"} width={"20px"} />
                            <div style={{ display: "flex", alignItems: "flex-end", flexDirection: "column" }}>
                                <span style={{ color: "white", fontWeight: "bold", fontSize: "12px" }}>COLLEGEDUNIA RATING</span>
                                <span style={{ color: "white", fontWeight: "bold" }}>{cdRating}/10</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='c_middle'>
                    <div className='c_middle_top'>
                        <div><img src="https://images.unsplash.com/photo-1572916289328-eca59d6903ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" height={"70px"} width="65px"
                            style={{ objectFit: "cover", marginLeft: "12px" }} /></div>
                        <div style={{ marginLeft: "10px" }}>
                            <span style={{ color: "white", textTransform: "uppercase" }}>{cName}<br /> -[NIT] {location}</span>
                            <div style={{ display: "flex" }}>
                                <div style={{ fontWeight: "bold", color: "gray" }} >
                                    <img src={Pin} alt="" height={"12px"} width="14px" />
                                    <span>{location}</span> {","}
                                    <span>Haryana</span>
                                </div>

                                <div style={{ marginLeft: "7px", fontWeight: "bold", color: "gray", display: "flex", alignItems: "center", marginTop: "4px" }}>
                                    <img src={Check} alt="" height={"14px"} width={"14px"} />
                                    <span style={{ marginLeft: "5px", fontSize: "12px" }}>AICTE</span>
                                </div>
                            </div>

                        </div>

                    </div>



                    <div className='c_middle_m'>

                        <div style={{ display: "flex", flexDirection: "column", marginTop: "40px" }}>
                            <span style={{ color: "#ff3300", fontWeight: "bold", fontSize: "18px" }}>₹ {fees}</span>
                            <span style={{ fontSize: "12px", fontWeight: "bold", color: "gray" }}>BE/B.TECH- FIRST YEAR</span>
                            <span style={{ fontSize: "12px", fontWeight: "bold", color: "gray" }}>FEES</span>
                        </div>
                        <div style={{ height: "60px", width: "1px", backgroundColor: "gray", marginTop: "40px", marginLeft: "10px" }}> </div>

                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px", marginTop: "40px" }}>
                            <span style={{ color: "#ff3300", fontWeight: "bold", fontSize: "18px" }}>{userRating}/10</span>
                            <span style={{ fontSize: "12px", fontWeight: "bold", color: "gray" }}>BASED ON 415 USER</span>
                            <span style={{ fontSize: "12px", fontWeight: "bold", color: "gray" }}>REVIEWS</span>
                        </div>
                    </div>

                    <hr />

                    <div className='c_bottom'>
                        <div style={{ display: "flex", justifyContent: "space-around", textAlign: "center", fontWeight: "bold", color: "gray", fontSize: "14px", marginTop: "7px" }}>
                            <div>
                                <span>RANKED 50 OUT OF 300</span><br />
                                <span>NIRF</span>
                            </div>
                            <div>
                                <span>RANKED 26 OUT OF 216</span><br />
                                <span>THIS WEEK</span>
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", gap: "20px", backgroundColor: "#eee", height: "50px", alignItems: "center", position: "absolute", bottom: "36px", fontWeight: "bold", color: "gray", width: "100%" }}>
                            <span style={{ fontSize: "12px" }}>ADMISSION 2022</span>
                            <span style={{ fontSize: "12px" }}>REVIEWS</span>
                            <span style={{ fontSize: "12px" }}>COURSES & FEES</span>
                        </div>
                        <div style={{ display: "flex", position: "absolute", bottom: "0px", width: "100%", cursor: "pointer", height: "35px", alignItems: "center" }}>
                            <div style={{ flex: "1", textAlign: "center", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: " #ff3300", color: "white", fontWeight: "bold", gap: "7px" }}>
                                <img src={ApplyImg} alt="" height={"14px"} width="14px" />
                                <span >APPLY NOW</span>
                            </div>
                            <div style={{ flex: "1", cursor: "pointer", textAlign: "center", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: " #ff3300", border: "1px solid grey", fontWeight: "bold", gap: "7px" }}>
                                <img src={DownloadImg} alt="" height={"14px"} width="14px" />
                                <span>BROCHURE</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
