export const Entry = (props) => {
    return (
        <div>
            <h2>Created by: {props.name}</h2>
            <p>{props.content}</p>
        </div>
    )
}