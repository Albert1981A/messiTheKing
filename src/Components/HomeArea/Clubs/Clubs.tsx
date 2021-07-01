import "./Clubs.css";

function Clubs(): JSX.Element {

    // Displaying list 2 - Display by collection:
    // const teams = ["Newell\'s Old Boys", "Barcelona Touth", "Barcelona C", "Barcelona B", "Barcelona" ];

    // Displaying list 3 - Display collection of Objects by key and value: 
    const teams = [{"id":1, "name":"Newell\'s Old Boys"}, {"id":2, "name":"Barcelona Touth"}, {"id":3, "name":"Barcelona C"}, {"id":4, "name":"Barcelona B"}, {"id":5, "name":"Barcelona"},];

    return (
        <div className="Clubs Box">
            <h3>The clubs Messi played in</h3>
            
            {/* Displaying list 1 - Hard coded:
            <span>Newell's Old Boys</span>
            <span>Barcelona Touth</span>
            <span>Barcelona C</span>
            <span>Barcelona B</span>
            <span>Barcelona</span>
             */}

            {/* Displaying list 2 - Display by collection: 
            {teams.map(team => <span>| {team} </span>)}
            */}

            {/* Displaying list 3 - Display collection of Objects by value: 
            {teams.map(team => <span>| {team.name} </span>)}
            */}

            {/* Displaying list 4 - Display collection of Objects and providing unique id for React DOM: */}
            {teams.map((team, idx) => <span key = {team.id}>{idx ? " | ": " "} {team.name} </span>)}

        </div>
    );
}

export default Clubs;
