useEffect(() => {
    fetchData(); // first load

    const interval = setInterval(() => {
      fetchData(); // poll every 5 sec
    }, 5000);

    return () => clearInterval(interval);
  }, []);