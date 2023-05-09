import './share.css'
import { PermMedia, Label, Room, EmojiEmotions, Cancel } from '@mui/icons-material'
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function Share() {
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const desc = useRef();
    const [file, setFile] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value,
        };
        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newPost.img = fileName;
            console.log(newPost);
            try {
                await axios.post("/upload", data);
            } catch (err) { }
        }
        try {
            await axios.post("/posts", newPost);
            window.location.reload();
        } catch (err) { console.log(err) }
    };

    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className='shareProfileImg' src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} alt="" />

                    <input className='shareInput' placeholder={"What's in your mind " + user.username + "?"} ref={desc} />
                </div>

                <hr className='shareHr' />
                {file && (
                    <div className="shareImgContainer">
                        <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
                        <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
                    </div>
                )}
                <form className="shareBottom" onSubmit={submitHandler}>
                    <div className="shareOptions">
                        <label htmlFor='file' className="shareOption">
                            <span className='shareOptionText'>
                                <PermMedia htmlColor='tomato' className='shareIcon' />
                                Photo or Video</span>

                            <input style={{ display: "none" }} type="file" id="file" accept='.png,.jpeg,.jpg' onChange={(e) => setFile(e.target.files[0])} />
                        </label>
                        <div className="shareOption">
                            <span className='shareOptionText'>
                                <Label htmlColor='blue' className='shareIcon' />
                                Tag</span>
                        </div>
                        <div className="shareOption">
                            <span className='shareOptionText'>
                                <Room htmlColor='green' className='shareIcon' />
                                Locataion</span>
                        </div>
                        <div className="shareOption">
                            <span className='shareOptionText'>
                                <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />
                                Feelings</span>
                        </div>
                    </div>
                    <button className='shareButton' type='submit'>Share</button>
                </form>
            </div>
        </div>
    )
}

export default Share