$(function () {
  var e = new Gantt(
      "#tasks-gantt",
      [
        {
          id: "1",
          name: "Project 01",
          start: "2024-07-16",
          end: "2024-07-20",
          progress: 55,
        },
        {
          id: "2",
          name: "Project 02",
          start: "2024-07-19",
          end: "2024-07-21",
          progress: 85,
        },
        {
          id: "3",
          name: "Project 03",
          start: "2024-07-21",
          end: "2024-07-22",
          progress: 80,
        },
        {
          id: "4",
          name: "8Project 04",
          start: "2024-07-15",
          end: "2024-07-17",
          progress: 80,
        },
        {
          id: "5",
          name: "Project 05",
          start: "2024-07-18",
          end: "2024-07-22",
          progress: 65,
        },
        {
          id: "6",
          name: "Project 06",
          start: "2024-08-20",
          end: "2024-08-31",
          progress: 15,
        },
        {
          id: "7",
          name: "Project 07",
          start: "2024-08-25",
          end: "2024-08-26",
          progress: 99,
        },
        {
          id: "8",
          name: "Project 08",
          start: "2024-08-28",
          end: "2024-08-30",
          progress: 35,
        },
        {
          id: "9",
          name: "Project 09",
          start: "2024-08-01",
          end: "2024-08-03",
          progress: 25,
        },
        {
          id: "10",
          name: "Project 10",
          start: "2024-08-05",
          end: "2024-08-07",
          progress: 60,
        },
      ],
      {
        view_modes: ["Quarter Day", "Half Day", "Day", "Week", "Month"],
        bar_height: 35.7,
        padding: 20,
        view_mode: "Week",
        custom_popup_html: function (e) {
          var s = e.end;
          60 <= e.progress || (30 <= e.progress && e.progress);
          return `
            <div class="popover fade show bs-popover-right gantt-task-details" role="tooltip">
                <div class="arrow"></div><div class="popover-body">
                <h5>${e.name}</h5><p class="mb-2">Expected to finish by ${s}</p>
                <div class="progress mb-2">
                <div class="progress-bar  progressCls + '" role="progressbar" style="width: ${e.progress}%;" aria-valuenow="${e.progress}"
                 aria-valuemin="0" aria-valuemax="100">${e.progress}%</div>
                </div></div></div>
                `;
        },
      }
    ),
    s =
      ($("#modes-filter :input").on("change", function () {
        e.change_view_mode($(this).val());
      }),
      document.getElementById("modes-filter").querySelectorAll(".btn"));
  s.forEach(function (e) {
    e.addEventListener("click", function () {
      s.forEach(function (e) {
        e.classList.remove("active");
      }),
        e.classList.add("active");
    });
  });
});
