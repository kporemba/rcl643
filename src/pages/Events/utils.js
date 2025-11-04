import allEvents from "./events.json";
export const sortEvents = () => {
  const today = new Date();
  return allEvents.events.reduce(
    (acc, curr) => {
      const endDate = new Date(curr.endDate);
      if (today > endDate) {
        acc.pastEvents.push(curr);
      } else {
        acc.currentEvents.push(curr);
      }
      return acc;
    },
    { currentEvents: [], pastEvents: [] }
  );
};
