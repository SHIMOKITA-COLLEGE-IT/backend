import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRootsTracingWhereUniqueInput } from './user-roots-tracing-where-unique.input';
import { Type } from 'class-transformer';
import { UserRootsTracingCreateWithoutUserSkillAcquisitionsInput } from './user-roots-tracing-create-without-user-skill-acquisitions.input';

@InputType()
export class UserRootsTracingCreateOrConnectWithoutUserSkillAcquisitionsInput {

    @Field(() => UserRootsTracingWhereUniqueInput, {nullable:false})
    @Type(() => UserRootsTracingWhereUniqueInput)
    where!: UserRootsTracingWhereUniqueInput;

    @Field(() => UserRootsTracingCreateWithoutUserSkillAcquisitionsInput, {nullable:false})
    @Type(() => UserRootsTracingCreateWithoutUserSkillAcquisitionsInput)
    create!: UserRootsTracingCreateWithoutUserSkillAcquisitionsInput;
}
