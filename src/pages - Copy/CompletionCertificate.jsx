import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const CompletionCertificate = () => {
  const certRef = useRef();
  const location = useLocation();
  const name = location.state?.name || "Guest";
  const score = location.state?.score || "0";
  const date = location.state?.date || new Date().toLocaleDateString("en-IN", {
    day: "2-digit", month: "short", year: "numeric",
  });

  const handleDownload = async () => {
    const canvas = await html2canvas(certRef.current, { scale: 2, useCORS: true });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 10, pdfWidth, pdfHeight);
    pdf.save(`${name.replace(/\s/g, "_")}_certificate.pdf`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-indigo-100 flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        ref={certRef}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative bg-white shadow-2xl rounded-3xl p-10 md:p-14 text-center border-4 border-yellow-500 w-full max-w-3xl"
      >
        {/* Ribbon */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-bold px-6 py-2 rounded-full shadow-md text-sm tracking-wider">
          CERTIFIED
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-800 mb-6">
          🎓 Certificate of Completion
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-2">This is proudly presented to</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-3">
          {name}
        </h2>
        <p className="text-gray-600 mb-6">for successfully completing the quiz</p>
        <div className="text-xl text-green-700 font-semibold mb-4">Score Achieved: {score}</div>
        <p className="text-sm text-gray-400">Date Issued: {date}</p>
      </motion.div>

      <motion.button
        onClick={handleDownload}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
      >
        📥 Download PDF
      </motion.button>
    </div>
  );
};

export default CompletionCertificate;
