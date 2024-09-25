import supabase from '../supabaseClient';

export const fetchProjects = async () => {
  const { data, error } = await supabase
    .from('projects')
    .select('*');

  if (error) {
    console.error('Error fetching projects:', error);
    return [];
  }

  return data;
};