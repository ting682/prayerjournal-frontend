export const Entry = (props) => {
    debugger
    return (
        <div>
            <h2>Created by: {props.entry.name}</h2>
            <p>{props.entry.content}</p>
            <p>Likes: {props.entry.likes_count}</p>
        </div>
    )
}