$('#bookingsTable').DataTable({
    ...dataTableConfig,
    columns: [
        // ... các columns khác
        {
            data: 'status',
            render: function (data) {
                return createBookingStatusBadge(data);
            }
        },
        // ... columns khác
    ]
});
