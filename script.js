function calculateCurrentAttendance() {
    const total = parseInt(document.getElementById("totalLectures").value);
    const absent = parseInt(document.getElementById("lecturesAbsent").value);
  
    if (isNaN(total) || isNaN(absent) || total === 0 || absent > total) {
      document.getElementById("currentResult").innerText = "Please enter valid values.";
      return;
    }
  
    const attended = total - absent;
    const percentage = ((attended / total) * 100).toFixed(2);
    document.getElementById("currentResult").innerText = `Current Attendance: ${percentage}%`;
  }
  
  function calculateFutureAttendance() {
    const total = parseInt(document.getElementById("totalLectures").value);
    const absent = parseInt(document.getElementById("lecturesAbsent").value);
    const lecturesPerDay = parseInt(document.getElementById("lecturesPerDay").value);
    const daysToSkip = parseInt(document.getElementById("futureDays").value);
  
    if (
      isNaN(total) || isNaN(absent) || isNaN(lecturesPerDay) || isNaN(daysToSkip)
      || total === 0 || lecturesPerDay === 0
    ) {
      document.getElementById("futureResult").innerText = "Please enter valid values.";
      return;
    }
  
    const futureLectures = lecturesPerDay * daysToSkip;
    const futureTotal = total + futureLectures;
    const futureAbsent = absent + futureLectures;
    const futureAttended = futureTotal - futureAbsent;
    const futurePercentage = ((futureAttended / futureTotal) * 100).toFixed(2);
  
    document.getElementById("futureResult").innerText = `Future Attendance: ${futurePercentage}%`;
  }