import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Roots } from '../roots/roots.model';
import { Int } from '@nestjs/graphql';
import { UserSkillAcquisition } from '../user-skill-acquisition/user-skill-acquisition.model';
import { UserRootsTracingCount } from './user-roots-tracing-count.output';

@ObjectType()
export class UserRootsTracing {

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Roots, {nullable:false})
    roots?: Roots;

    @Field(() => Int, {nullable:false})
    rootsId!: number;

    @Field(() => Date, {nullable:true})
    from!: Date | null;

    @Field(() => Date, {nullable:true})
    to!: Date | null;

    @Field(() => [UserSkillAcquisition], {nullable:true})
    userSkillAcquisitions?: Array<UserSkillAcquisition>;

    @Field(() => UserRootsTracingCount, {nullable:false})
    _count?: UserRootsTracingCount;
}
