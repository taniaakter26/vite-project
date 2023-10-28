

const Project = (props) => {
    return (
        <div>
            <h3>Our Project</h3>
            <form onSubmit={props.submitBtn}></form>
            <input placeholder="Name" /><br/><br/>
            <input placeholder="Email" /><br/><br/>
            <button type="submit">Submit</button>
        </div>
    );
};

export default Project;