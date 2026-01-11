// UTILS.JS - Fonctions communes

// Export CSV
function exportToCSV(data, filename) {
    const headers = Object.keys(data[0]).join(',');
    const rows = data.map(obj => Object.values(obj).join(','));
    const csv = [headers, ...rows].join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.csv`;
    a.click();
}

// Export PDF (simple version)
function exportToPDF(elementId, filename) {
    const element = document.getElementById(elementId);
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>' + filename + '</title>');
    printWindow.document.write('<style>body{font-family:Arial;padding:20px;}table{width:100%;border-collapse:collapse;}th,td{border:1px solid #ddd;padding:8px;text-align:left;}</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(element.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}

// Pagination
function paginate(array, page = 1, perPage = 10) {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    return {
        data: array.slice(start, end),
        totalPages: Math.ceil(array.length / perPage),
        currentPage: page
    };
}

// Recherche
function search(array, searchTerm, fields) {
    return array.filter(item => 
        fields.some(field => 
            String(item[field]).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
}

// Tri
function sortBy(array, field, order = 'asc') {
    return [...array].sort((a, b) => {
        if (order === 'asc') {
            return a[field] > b[field] ? 1 : -1;
        } else {
            return a[field] < b[field] ? 1 : -1;
        }
    });
}
