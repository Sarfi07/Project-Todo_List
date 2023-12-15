export default function readProject() {
    const projects = JSON.parse(localStorage.getItem('Projects'));
    
    return projects;
}