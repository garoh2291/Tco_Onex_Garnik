import './styles.css'
export const MirrorInput = ({onChange}) =>{
    return (
        <div className="mirror-input-section">
            <input type="text" placeholder="Write Your content here" className="mirror-input" onChange={onChange}/>
        </div>
    )
}