const Resume = () => {
  return (
    <section id="resume" className="section fade-in">
      <h2>Resume</h2>

      <div className="resume-btn">
        <a
          href="https://docs.google.com/gview?url=http://localhost:5173/sujana%20yata%20resume.docx&embedded=true"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          👁 View Resume
        </a>

        <a
          href="/sujana yata resume.docx"
          download
          className="btn"
          style={{ marginLeft: "15px" }}
        >
          📄 Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
