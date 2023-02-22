﻿using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Reactivities.Core;
using Reactivities.Interfaces;

namespace Reactivities.Activities;

public class Details
{
    public class Query : IRequest<Result<ActivityDto>>
    {
        public Guid Id { get; set; }
    }

    public class Handler : IRequestHandler<Query, Result<ActivityDto>>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        private readonly IUserAccessor _userAccessor;

        public Handler(DataContext context, IMapper mapper, IUserAccessor userAccessor)
        {
            _context = context;
            _mapper = mapper;
            _userAccessor = userAccessor;
        }

        public async Task<Result<ActivityDto>> Handle(Query request, CancellationToken cancellationToken)
        {
            var activity = await _context.Activities
                .ProjectTo<ActivityDto>(_mapper.ConfigurationProvider,
                    new {currentUsername = _userAccessor.GetUsername()})
                .FirstOrDefaultAsync(x => x.Id == request.Id);

            return Result<ActivityDto>.Success(activity);
        }
    }
}