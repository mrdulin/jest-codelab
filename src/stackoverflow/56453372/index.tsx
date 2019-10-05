import React, { Component } from 'react';

const Years = ({ key, year }) => (
  <div>
    {key}, {year}
  </div>
);

const Tours = ({ key, tour }) => (
  <div>
    {key}, {tour}
  </div>
);

const Songs = ({ key, song }) => (
  <div>
    {key}, {song}
  </div>
);

const Venues = ({ key, venue }) => (
  <div>
    {key}, {venue}
  </div>
);

const Shows = ({ key, show }) => (
  <div>
    {key}, {show}
  </div>
);

const SetLists = () => <div>SetLists</div>;
const UserStats = () => <div>UserStats</div>;
const HomePage = () => <div>HomePage</div>;

export interface IXComponentProps {
  years: any[];
  tours: any[];
  songs: any[];
  shows: any[];
  venues: any[];
  currentPath: string;
}

export class XComponent extends Component<IXComponentProps> {
  constructor(props) {
    super(props);
  }

  public componentToRender = currentPath => {
    const { years, tours, songs, shows, venues } = this.props;

    switch (currentPath) {
      case '/Years':
        return years.map(year => <Years key={year.date} year={year} />);
      case '/Tours':
        return tours.map(tour => <Tours key={tour.id} tour={tour} />);
      case '/Songs':
        return songs.map(song => <Songs key={song.id} song={song} />);
      case '/Venues':
        return venues.map(venue => <Venues key={venue.id} venue={venue} />);
      case '/Shows':
        return shows.map(show => <Shows key={show.id} show={show} />);
      case '/SetList':
        return <SetLists />;
      case '/UserStats':
        return <UserStats />;
      default:
        return <HomePage />;
    }
  }

  public render() {
    const { currentPath } = this.props;
    return this.componentToRender(currentPath);
  }
}
