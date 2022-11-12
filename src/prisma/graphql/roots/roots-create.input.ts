import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RootsType } from '../prisma/roots-type.enum';
import { UserRootsTracingCreateNestedManyWithoutRootsInput } from '../user-roots-tracing/user-roots-tracing-create-nested-many-without-roots.input';

@InputType()
export class RootsCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => RootsType, {nullable:false})
    rootsType!: keyof typeof RootsType;

    @Field(() => String, {nullable:true})
    googleMapUrl?: string;

    @Field(() => String, {nullable:true})
    introductionUrl?: string;

    @Field(() => UserRootsTracingCreateNestedManyWithoutRootsInput, {nullable:true})
    users?: UserRootsTracingCreateNestedManyWithoutRootsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
