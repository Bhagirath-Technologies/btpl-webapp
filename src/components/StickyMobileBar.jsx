import React from 'react';

const StickyMobileBar = ({ onGetQuoteClick }) => {
  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .sticky-mobile-bar {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, #1d3b6a 0%, #3eb8e7 100%);
            padding: 12px 16px;
            box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.2);
            z-index: 999;
            animation: slideUp 0.3s ease-out;
          }
          @keyframes slideUp {
            from {
              transform: translateY(100px);
            }
            to {
              transform: translateY(0);
            }
          }
          .sticky-mobile-bar-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
          }
          .sticky-mobile-bar-text {
            flex: 1;
            color: #ffffff;
            font-size: 13px;
            font-weight: 500;
            line-height: 1.3;
          }
          .sticky-mobile-bar-btn {
            background: #ffffff;
            color: #1d3b6a;
            border: none;
            padding: 8px 16px;
            border-radius: 6px;
            font-weight: 600;
            font-size: 12px;
            cursor: pointer;
            white-space: nowrap;
            transition: all 0.3s ease;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          }
          .sticky-mobile-bar-btn:active {
            transform: scale(0.95);
          }
          .sticky-mobile-bar-btn:hover {
            background: #f0f0f0;
          }
        }
        @media (min-width: 769px) {
          .sticky-mobile-bar {
            display: none;
          }
        }
      `}</style>
      
      <div className="sticky-mobile-bar">
        <div className="sticky-mobile-bar-content">
          <div className="sticky-mobile-bar-text">
            <strong>Get a Free Quote</strong>
            <div style={{ fontSize: '11px', opacity: 0.9 }}>
              Trusted by 500+ businesses
            </div>
          </div>
          <button 
            className="sticky-mobile-bar-btn"
            onClick={onGetQuoteClick}
          >
            Get Quote
          </button>
        </div>
      </div>
    </>
  );
};

export default StickyMobileBar;
