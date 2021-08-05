using AutoMapper;
using Reactivities.Entities;

namespace Reactivities.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Activity, Activity>();
        }
    }
}
