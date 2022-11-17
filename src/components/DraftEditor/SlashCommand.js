import classes from './SlashCommand.module.css'
import CommandItem from './CommandItem'

const questions_list = [
    {icon: "text_fields",title: "Text", desc: "Text"},
    {icon: "email",title: "Email", desc: "Email"},
    {icon: "link",title: "URL", desc: "URL"},
    {icon: "flaky",title: "Yes / No", desc: "Yes / No"},
    {icon: "palette",title: "Color Picker", desc: "Color Picker"},
    {icon: "looks_one",title: "Number", desc: "Number"},
    {icon: "smartphone",title: "Phone Number", desc: "Phone Number"},
    {icon: "home",title: "Address", desc: "Address"},
    {icon: "public",title: "Country", desc: "Country"},
    {icon: "insert_invitation",title: "Appointment", desc: "Appointment"},
    {icon: "calendar_today",title: "Date", desc: "Date"},
    {icon: "schedule",title: "Time", desc: "Time"},
    {icon: "check_box",title: "Multiple Choice", desc: "Multiple Choice"},
    {icon: "arrow_drop_down",title: "Dropdown", desc: "Dropdown"},
    {icon: "star",title: "Rating", desc: "Rating"},
    {icon: "portrait",title: "Image Upload", desc: "Image Upload"},
    {icon: "attach_file",title: "File Upload", desc: "File Upload"},
    {icon: "gesture",title: "Signature", desc: "Signature"},
    // {icon: "attach_money",title: "Price", desc: "Price"},
    // {icon: "shopping_bag",title: "Product", desc: "Product"},
    // {icon: "loop",title: "Subscriptions", desc: "Subscriptions"},
    // {icon: "calculate",title: "Calculation", desc: "Calculation"},
];
const content_list = [
    {icon: "title",title: "H1 Heading", desc: "Big heading"},
    {icon: "text_fields",title: "H2 Heading", desc: "Small heading"},
    {icon: "short_text",title: "Paragraph", desc: "Normal text"},
    {icon: "horizontal_rule",title: "Section break", desc: "Add a section break"},
];


const quick_questions_list = [
    {icon: "face",title: "Name", desc: "Name"},
    {icon: "subject",title: "Text (Long)", desc: "Text (Long)"},
    {icon: "thumb_up",title: "Terms & Conditions", desc: "Terms and Conditions"},
    {icon: "radio_button_checked",title: "Radio Buttons", desc: "Radio Buttons"},
    {icon: "check_box",title: "Checkbox", desc: "Checkbox"},
];

const SlashCommand = () =>{
    return(
            <div className={classes.slashcommand_panel}>
                <div className={classes.grouptitle}>Content</div>
                {
                    content_list.map((question,i) => 
                        <div className={classes.command_option} key={i}> 
                            <CommandItem icon={question.icon} title={question.title} desc={question.desc}/>
                        </div>
                    )
                }

                <div className={classes.grouptitle}>Questions</div>
                {
                    questions_list.map((question,i) => 
                        <div className={classes.command_option} key={i}> 
                            <CommandItem icon={question.icon} title={question.title} desc={question.desc}/>
                        </div>
                    )
                }

                <div className={classes.grouptitle}>Quick Questions</div>
                {
                    quick_questions_list.map((question,i) => 
                        <div className={classes.command_option} key={i}> 
                            <CommandItem icon={question.icon} title={question.title} desc={question.desc}/>
                        </div>
                    )
                }
                  
              
                
            </div>

       
    )
}

export default SlashCommand;