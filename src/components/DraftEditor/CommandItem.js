import classes from './SlashCommand.module.css'

const CommandItem =(props) => {
    return (                
        <>   
            <div className={classes.optionIcon}>
                <i className="material-icons"> {props.icon}</i> 
            </div>
            <div className={classes.optionContent}>
                <div className={classes.optionTitle}> {props.title}</div>
                <div className={classes.optionDescription}> 
                <span>Insert a new 
                    <span className={classes.command_highlight}>{props.desc}</span> question</span>
                </div>
            </div>
        </> 
    )
}

export default CommandItem;