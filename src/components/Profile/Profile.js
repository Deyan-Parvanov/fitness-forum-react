import "./style/profile.css";

export const Profile = () => {
    return (
        <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
            <div className="card p-4">
                <div className=" image d-flex flex-column justify-content-center align-items-center">
                    <button className="btn btn-secondary">
                        <img src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairBob&accessoriesType=Prescription02&hairColor=PastelPink&facialHairType=MoustacheMagnum&facialHairColor=Platinum&clotheType=ShirtScoopNeck&clotheColor=Pink&eyeType=WinkWacky&eyebrowType=RaisedExcitedNatural&mouthType=Serious&skinColor=Pale" height="100" width="100" /></button>
                    <span className="name mt-3">Eleanor Pena</span>
                    <span className="idd">@eleanorpena</span>
                    <div className=" d-flex mt-2">
                        <button className="btn1 btn-dark">Edit Profile</button>
                    </div>
                    <div className="text mt-3">
                        <div className="statistics">
                            <span className="profile-description">
                                Eleanor Pena is a creator of minimalistic x bold graphics and digital
                                artwork.<br/><br/> Artist/ Creative Director by Day #NFT minting@ with FND night.
                            </span>
                            <span>
                                Posts: 2
                            </span>
                            <span>
                                Comments: 14
                            </span>
                        </div>
                    </div>
                    <div className=" px-2 rounded mt-4 date ">
                        <span className="join">Joined May,2021</span>
                    </div>
                </div>
            </div>
        </div>
    );
};