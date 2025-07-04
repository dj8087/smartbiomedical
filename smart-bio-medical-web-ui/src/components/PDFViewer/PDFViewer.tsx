import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const PDFViewer: React.FC = () => {
  const [searchParams] = useSearchParams();
  const pdfUrl = searchParams.get('url') || '';
  const title = searchParams.get('title') || 'PDF Document';
  const [loading, setLoading] = useState(true);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  return (
    <div className="pdf-viewer-page" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Header Section */}
      <section className="hero section" style={{  padding: '20px 0 15px 0',  background: 'linear-gradient(135deg, #2563eb 0%, #059669 100%)', minHeight: '10vh' }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 style={{ color: 'white', marginBottom: '10px', fontSize: '28px' }}>{title}</h2>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '16px', marginBottom: '0' }}>
                View and download our product documentation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Viewer Section */}
      <section className="pdf-content section" style={{ padding: '40px 0' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              {!pdfUrl ? (
                <div className="alert alert-warning text-center" style={{ 
                  backgroundColor: '#fff3cd', 
                  borderColor: '#ffeaa7', 
                  color: '#856404',
                  padding: '30px',
                  borderRadius: '8px'
                }}>
                  <h4>No PDF URL provided</h4>
                  <p>Please provide a valid PDF URL to view the document.</p>
                </div>
              ) : (
                <div className="pdf-viewer-container" style={{ 
                  backgroundColor: 'white', 
                  borderRadius: '12px', 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  border: '1px solid #e5e7eb'
                }}>
                  {loading && (
                    <div className="text-center" style={{ 
                      padding: '60px 20px',
                      backgroundColor: '#f8f9fa'
                    }}>
                      <div className="spinner-border" style={{ color: '#2563eb' }} role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <p style={{ marginTop: '20px', color: '#6b7280' }}>Loading PDF document...</p>
                    </div>
                  )}
                  
                  <iframe
                    src={pdfUrl}
                    style={{
                      width: '100%',
                      height: '800px',
                      border: 'none',
                      display: loading ? 'none' : 'block'
                    }}
                    onLoad={handleIframeLoad}
                    title={title}
                  />
                  
                  {/* Download Button */}
                  <div className="text-center" style={{ 
                    padding: '20px',
                    backgroundColor: '#f8f9fa',
                    borderTop: '1px solid #e5e7eb'
                  }}>
                    <a 
                      href={pdfUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{
                        backgroundColor: '#2563eb',
                        borderColor: '#2563eb',
                        padding: '12px 30px',
                        fontSize: '16px',
                        fontWeight: '600',
                        textDecoration: 'none',
                        borderRadius: '6px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <i className="bi bi-download"></i>
                      Download PDF
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <section style={{ padding: '20px 0 40px 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <a 
                href="/"
                className="btn btn-outline-primary"
                style={{
                  borderColor: '#2563eb',
                  color: '#2563eb',
                  padding: '10px 25px',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <i className="bi bi-arrow-left"></i>
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PDFViewer;
