export default {
	genPDF: () => {
		const doc = new jspdf.jsPDF();
	doc.text('Users', 20, 20);
		doc.table(20, 30, Table1.tableData, Table1.columnOrder, {autoSize: true});
		download(doc.output(), 'users_list.pdf');
	}
}