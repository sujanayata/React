const Resume = () => {
  return (
    <section id="resume" className="section fade-in">
      <h2>Resume</h2>

      {/* Resume Viewer */}
      <div className="resume-viewer">
        <iframe
          src="/sujanayataresume.pdf#toolbar=0"
          title="Resume Viewer"
        ></iframe>
      </div>

      {/* Actions */}
      <div className="resume-btn">
        <a
          href="/sujanayataresume.pdf"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          👁 View Fullscreen
        </a>

        <a
          href="/sujanayataresume.pdf"
          download
          className="btn"
        >
          📄 Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
