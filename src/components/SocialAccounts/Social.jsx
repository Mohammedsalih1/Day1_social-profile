import "./style.css";

const Social = () => {

    const accounts = ['GitHub', 'Frontend Mentor', 'LinkedIn', 'Twitter', 'Instagram'];

    return (
        <div className="social-accounts">
            <p className="job-title">&quot; Front-end developer and avid reader.&quot;</p>
            {accounts.map((account, index) => <span className="account" key={index}>{account}</span>)}
        </div>
    )
}

export default Social
