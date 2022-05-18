export default function Title({title, subtitle}) {
    // const {title, subtitle} = props
    return(
        <div>
            <h1 className="title">{title}</h1>
            <br/>
            <h4 className="subtitle">{subtitle}</h4>
        </div>
    )
}