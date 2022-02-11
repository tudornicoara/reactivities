using Microsoft.AspNetCore.Http;
using Reactivities.Photos;
using System.Threading.Tasks;

namespace Reactivities.Interfaces
{
    public interface IPhotoAccessor
    {
        Task<PhotoUploadResult> AddPhoto(IFormFile file);
        Task<string> DeletePhoto(string publicId);
    }
}
